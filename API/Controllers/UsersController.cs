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
using System.IO;

using Microsoft.AspNetCore.Hosting;


namespace Wellnest_API.Controllers
{
 
    

        [Route("api/[controller]")]
        [ApiController]
        public class UsersController : ControllerBase
        {
            private readonly IConfiguration _configuration;
            private readonly IWebHostEnvironment _env;


            public UsersController(IConfiguration configuration, IWebHostEnvironment env)
            {
                _configuration = configuration;
                _env = env;
            }
            [HttpGet]
            public JsonResult Get()
            {
                string query = @"
            select UserID, Name, Email, Username, Password, Role from Users order by UserID desc ";
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
            public JsonResult Post(Users u)
            {
                string query = @"INSERT INTO Users(Name,Email,Username,Password,Role) values ('" + u.Name + @"','" + u.Email + @"','" + u.Username + @"','" + u.Password + @"','" + u.Role + @"')";
                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("WellnestAppConn");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        myCon.Close();
                    }

                    return new JsonResult("Added Suscccesfully");
                }

            }
            [HttpPut]
            public JsonResult Put(Users u)
            {
                string query = @"
            update Users set 
            Name = '" + u.Name + @"'
            ,Email = '" + u.Email + @"'
            ,Username='" + u.Username + @"'
            ,Password='" + u.Password + @"'
            ,Role ='" + u.Role + @"'
            where UserID=" + u.UserID + @" ";
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

                    return new JsonResult("Updated Suscccesfully");
                }


            }
            [HttpDelete("{id}")]
            public JsonResult Delete(int id)
            {
                string query = @"DELETE FROM Users  where UserID=" + id + @" ";

                DataTable table = new DataTable();
                string sqlDataSource = _configuration.GetConnectionString("WellnestAppConn");
                SqlDataReader myReader;
                using (SqlConnection myCon = new SqlConnection(sqlDataSource))
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(query, myCon))
                    {
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);

                        myReader.Close();
                        myCon.Close();
                    }

                    return new JsonResult("Deleted Suscccesfully");
                }

            }
        }
    }

