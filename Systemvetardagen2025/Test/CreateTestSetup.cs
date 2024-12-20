using Microsoft.Data.Sqlite;

public static class CreateTestDb
{
    public static bool createTestDbWithData(string path)
    {
        string createPreSignupTable = @"CREATE TABLE IF NOT EXISTS pre_signup(
        id INTEGER PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        degree TEXT NOT NULL,
        field_of_study TEXT NOT NULL
        )";

        string insertPreSignupData = @"INSERT INTO
        pre_signup(
        first_name,
        last_name,
        email,
        degree,
        field_of_study)
        VALUES(@first_name,@last_name,@email, @degree, @field_of_study)";

        try
        {
            using (var connection = new SqliteConnection(path))
            {

                connection.Open();

                using (var cmd = new SqliteCommand(createPreSignupTable, connection))
                {
                    cmd.ExecuteNonQuery();
                };

                connection.Close();
                connection.Open();
                try
                {

                    using (var cmd = new SqliteCommand(insertPreSignupData, connection))
                    {

                        cmd.Parameters.AddWithValue("@first_name", "Wilhelm");
                        cmd.Parameters.AddWithValue("@last_name", "Durelius");
                        cmd.Parameters.AddWithValue("@email", "wilhelm@durelius.se");
                        cmd.Parameters.AddWithValue("@degree", "Bachelor's degree");
                        cmd.Parameters.AddWithValue("@field_of_study", "Computer Science");
                        cmd.ExecuteNonQuery();

                        cmd.Parameters["@first_name"].Value = "namn";
                        cmd.Parameters["@last_name"].Value = "efternamn";
                        cmd.Parameters["@email"].Value = "test@test.com";
                        cmd.Parameters["@degree"].Value = "Master's degree";
                        cmd.Parameters["@field_of_study"].Value = "Harry Potter kunskap";
                        cmd.ExecuteNonQuery();

                        cmd.Parameters["@first_name"].Value = "testnamn";
                        cmd.Parameters["@last_name"].Value = "testsson";
                        cmd.Parameters["@email"].Value = "info@test.com";
                        cmd.Parameters["@degree"].Value = "Doctoral degree";
                        cmd.Parameters["@field_of_study"].Value = "IT in medieval ages";
                        cmd.ExecuteNonQuery();
                    }
                }
                catch (SqliteException ex)
                {
                    Console.WriteLine(ex.Message);
                }

            };
        }
        catch (SqliteException ex)
        {
            Console.WriteLine(ex.Message);
            return false;
        }
        return true;
    }
}