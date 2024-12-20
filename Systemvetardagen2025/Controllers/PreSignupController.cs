using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;

[ApiController]
[Route("[controller]")]
public class PreSignupController(SystemvetardagenContext context) : ControllerBase
{
    private SystemvetardagenContext _context = context;




    [HttpPost("newpresignup")]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult PostTest([FromBody] PreSignupDTO ps)
    {
        if (ps == null) return BadRequest("emptyps");
        try
        {

            var psDB = _context.PreSignups.Add(new PreSignup { Degree = ps.Degree, Email = ps.Email, FieldOfStudy = ps.FieldOfStudy, FirstName = ps.FirstName, LastName = ps.LastName });
            _context.SaveChanges();
            return Ok();
        }

        catch (Exception ex)
        {
            Console.WriteLine(ex);
            return BadRequest("error");
        }
    }

    [HttpGet("get-test")]
    [Produces("application/json")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    public IActionResult GetTest()
    {
        return Ok(new { test = "get test" });
    }
}