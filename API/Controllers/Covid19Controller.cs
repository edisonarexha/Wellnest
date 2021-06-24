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
    public class Covid19Controller : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public Covid19Controller(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]

        public JsonResult Get()
        {
            string query = @"
                select * Covid19";
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
        public JsonResult Post(Covid19 c)
        {
            string query = @"
                    insert into Covid_19
                    (Name, Email, Message)
                    values 
                    (
                    '" + c.CountryName + @"'
                    ,'" + c.Cases + @"'
                    ,'" + c.Recoveries + @"'
                    ,'" + c.deaths + @"'
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

        public JsonResult Put(Covid19 covid)
        {
            string query = @"
                    update Covid19 set 
                    CountryName = '" + covid.CountryName + @"',
                    Cases = '"+ covid.Cases+@"',
                    Recoveries ='"+covid.Recoveries+ @"',
                    deaths= '" + covid.deaths+ @"',
                    where UsersID = '" + covid.covidID + @"'
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

        public JsonResult Delete(int covidID)
        {
            string query = @"
                    delete from Covid19
                    where covidID = '" + covidID + @"'
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

