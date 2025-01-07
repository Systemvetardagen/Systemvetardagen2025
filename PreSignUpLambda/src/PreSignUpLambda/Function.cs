using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Amazon.Lambda.Core;
using Microsoft.EntityFrameworkCore;
using Npgsql;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace PreSignUpLambda;

public class Function
{


    public static readonly string _connString = "Host=" + System.Environment.GetEnvironmentVariable("RDS_PROXY_HOST") +
   ";Database=" + System.Environment.GetEnvironmentVariable("DB_NAME") +
   " ;Username=" + System.Environment.GetEnvironmentVariable("USER_NAME") +
   ";Password=" + System.Environment.GetEnvironmentVariable("PASSWORD") +
   ";Include Error Detail = true";
    private readonly PreSignupDbContext _dbContext;

    public Function()
    {
        _dbContext = new PreSignupDbContext();
    }
    /// <summary>
    /// A simple function that takes a string and does a ToUpper
    /// </summary>
    /// <param name="input">The event for the Lambda function handler to process.</param>
    /// <param name="context">The ILambdaContext that provides methods for logging and describing the Lambda environment.</param>
    /// <returns></returns>
    /// 
    public async Task<object> FunctionHandler(PreSignup input, ILambdaContext context)
    {
        await using var dbContext = new PreSignupDbContext();
        try
        {
            Console.WriteLine(input);
            dbContext.PreSignups.Add(input);
            await dbContext.SaveChangesAsync();
            return new { success = true };
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return new { success = false };
        }
    }
    // private void EnsureTableExists()
    // {
    //     using var connection = new NpgsqlConnection(_connString);
    //     connection.Open();

    //     string createTableQuery = @"
    //         CREATE TABLE IF NOT EXISTS pre_signup (
    //             id SERIAL PRIMARY KEY,
    //             first_name VARCHAR(255) NOT NULL,
    //             last_name VARCHAR(255) NOT NULL,
    //             email VARCHAR(255) NOT NULL UNIQUE,
    //             degree VARCHAR(255) NOT NULL,
    //             field_of_study VARCHAR(255) NOT NULL
    //         );";

    //     using var command = new NpgsqlCommand(createTableQuery, connection);
    //     command.ExecuteNonQuery();

    //     Console.WriteLine("Table ensured.");
    // }


}
[Table("pre_signup")]

public class PreSignup
{

    [Key]
    [Column("id")]
    public int Id { get; set; }
    [Column("first_name")]
    required public string FirstName { get; set; }
    [Column("last_name")]
    required public string LastName { get; set; }
    [Column("email")]
    required public string Email { get; set; }
    [Column("degree")]
    required public string Degree { get; set; }
    [Column("field_of_study")]
    required public string FieldOfStudy { get; set; }
}
public class PreSignupDbContext : DbContext
{
    public DbSet<PreSignup> PreSignups { get; set; } = default!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(Function._connString);
    }
}

