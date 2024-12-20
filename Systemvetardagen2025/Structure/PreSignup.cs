
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("pre_signup")]
public class PreSignup
{

    [Key]
    public int Id { get; set; }
    [Column("first_name")]
    required public string FirstName { get; set; }
    [Column("last_name")]

    required public string LastName { get; set; }
    required public string Email { get; set; }
    required public string Degree { get; set; }
    [Column("field_of_study")]

    required public string FieldOfStudy { get; set; }
}