using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;
using System.Text.Json.Serialization;
using Amazon.Lambda.Core;
using Microsoft.EntityFrameworkCore;
using Npgsql;
//deploy:  dotnet lambda deploy-function <aws function name>   
// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace GetSignUpsLambda;

public class Function
{


    public static readonly string _connString = "Host=" + System.Environment.GetEnvironmentVariable("RDS_PROXY_HOST") +
   ";Database=" + System.Environment.GetEnvironmentVariable("DB_NAME") +
   " ;Username=" + System.Environment.GetEnvironmentVariable("USER_NAME") +
   ";Password=" + System.Environment.GetEnvironmentVariable("PASSWORD");
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
    public async Task<object> FunctionHandler(User login, ILambdaContext context)
    {

        Console.WriteLine($"Input: {JsonSerializer.Serialize(login)}");

        await using var dbContext = new PreSignupDbContext();
        try
        {
            if (login.Username != "systemvetardagenadmin" || login.Password != System.Environment.GetEnvironmentVariable("systemvetarDagenAdminPwd"))
            {
                return new { signups = new List<PreSignup>(), success = false };
            }
            var presignups = await dbContext.PreSignups.ToListAsync();
            await dbContext.SaveChangesAsync();
            return new { signups = presignups, success = true };
        }
        catch (Exception ex)
        {
            Console.WriteLine("login input: " + login);
            Console.WriteLine(ex);
            return new { signups = new List<PreSignup>(), success = false };
        }
    }
    // private void ResetTable()
    // {
    //     using var connection = new NpgsqlConnection(_connString);
    //     connection.Open();

    //     string dropTableQuery = @"
    //         DROP table pre_signup;";

    //     string createTableQuery = @"
    //         CREATE TABLE IF NOT EXISTS pre_signup (
    //             id SERIAL PRIMARY KEY,
    //             first_name VARCHAR(255) NOT NULL,
    //             last_name VARCHAR(255) NOT NULL,
    //             email VARCHAR(255) NOT NULL UNIQUE,
    //             degree VARCHAR(255) NOT NULL,
    //             field_of_study VARCHAR(255) NOT NULL
    //         );";

    //     using var command = new NpgsqlCommand(dropTableQuery, connection);
    //     command.ExecuteNonQuery();
    //     using var command2 = new NpgsqlCommand(createTableQuery, connection);
    //     command2.ExecuteNonQuery();
    //     connection.Close();

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
public class User
{
    [JsonPropertyName("username")]

    required public string Username { get; set; }
    [JsonPropertyName("password")]
    required public string Password { get; set; }

}
public class PreSignupDbContext : DbContext
{
    public DbSet<PreSignup> PreSignups { get; set; } = default!;

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(Function._connString);
    }
}

