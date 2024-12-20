using Microsoft.EntityFrameworkCore;

public class SystemvetardagenContext : DbContext
{
    public SystemvetardagenContext(DbContextOptions<SystemvetardagenContext> options)
        : base(options)
    { }
    public required DbSet<PreSignup> PreSignups { get; set; }



}



