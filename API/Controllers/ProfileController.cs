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
    public class ProfileController : ControllerBase
    {



        
            private readonly IConfiguration _configuration;
            private readonly IWebHostEnvironment _env;


            public ProfileController(IConfiguration configuration, IWebHostEnvironment env)
            {
                _configuration = configuration;
                _env = env;
            }
            [HttpGet]
            public JsonResult Get()
            {
                string query = @"
            select * from Profile";
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
            public JsonResult Post(Profile u)
            {
                string query = @"INSERT INTO Profile(dateOfBirth,bloodType,alergies,vaccination,Photo) values ('" + u.dateOfBirth + @"','" + u.bloodType + @"','" + u.alergies + @"','" + u.vaccination + @"','" + u.Photo + @"')";
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
            public JsonResult Put(Profile u)
            {
                string query = @"
            update Profile set 
            dateOfBirth = '" + u.dateOfBirth + @"'
            , bloodType = '" + u.bloodType + @"'
            ,alergies='" + u.alergies + @"'
            ,vacciantion='" + u.vaccination + @"'
            ,Photo ='" + u.Photo + @"'
            where ProfileId=" + u.ProfileId + @" ";
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
                string query = @"DELETE FROM Profile  where ProfileId=" + id + @" ";

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




