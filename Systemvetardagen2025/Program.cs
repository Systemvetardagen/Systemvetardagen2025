using Microsoft.EntityFrameworkCore;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers()
          .AddNewtonsoftJson(options =>
          {
          });
builder.Services.AddCors(options =>
  {

      options.AddPolicy("Prod",
          builder => builder
                .WithOrigins("https://systemvetardagen.se")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()
              );
  });

builder.Services.AddCors(options =>
{
    options.AddPolicy("Dev",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());
});


string dbPath = "Data Source = ./systemvetardagen.db";
builder.Services.AddDbContext<SystemvetardagenContext>(options => options.UseSqlite(dbPath));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors("Dev");
    Console.WriteLine("test db success: " + CreateTestDb.createTestDbWithData(dbPath));
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseCors("Prod");

}

app.UseHttpsRedirection();
app.MapControllers();

app.Run();

