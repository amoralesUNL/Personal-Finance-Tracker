using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using Microsoft.Data.SqlClient;

namespace PersonalFinanceTracker.Controllers
{

    [ApiController]
    [Route("api/[controller]")]

    public class TransactionController : Controller
    {
        public readonly IConfiguration _configuration;
        public TransactionController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT Id, Amount, Type, TransactionDate FROM Transactions;";
            DataTable table = new DataTable();
            string sqlDatasource = _configuration.GetConnectionString("AppCon");

            try
            {
                using (SqlConnection myCon = new SqlConnection(sqlDatasource))
                {
                    myCon.Open();
                    try
                    {

                        using (SqlCommand myCommand = new SqlCommand(query, myCon))
                        {

                            using (SqlDataReader myReader = myCommand.ExecuteReader())
                            {
                                table.Load(myReader);
                                myReader.Close();
                                myCon.Close();
                            }

                        }

                    }
                    catch (Exception ex)
                    {
                        return new JsonResult(new { error = "An error occurred while executing query." });
                    }
                }

                return new JsonResult(table);
            }
            catch (Exception ex)
            {
                // Handle exceptions, log errors, or return appropriate error response
                return new JsonResult(new { error = "An error occurred while retrieving data.", });
            }

        }

    }


}
