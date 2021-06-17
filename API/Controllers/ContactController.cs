using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using Wellnest_API.Models;

namespace Wellnest_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ContactController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                    select UsersID, Name, Email, Message from dbo.Contact";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WellnestAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]

        public JsonResult Post(Contact c)
        {
            string query = @"
                    insert into dbo.Contact 
                    (Name, Email, Message)
                    values 
                    (
                    '" + c.Name + @"'
                    ,'" + c.Email + @"'
                    ,'" + c.Message + @"'
                    )";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WellnestAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Sent Succefully");
        }

        [HttpPut]

        public JsonResult Put(Contact c)
        {
            string query = @"
                    update dbo.Contact set 
                    Message = '" + c.Message + @"'
                    where UsersID = '" + c.UsersID + @"'
                    ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WellnestAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Succefully");
        }

        [HttpDelete("{id}")]

        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from dbo.Contact
                    where UsersID = '" + id + @"'
                    ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WellnestAppConn");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader); ;

                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Succefully");
        }
    }
}
