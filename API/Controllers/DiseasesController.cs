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
    public class DiseasesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;


        public DiseasesController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }
        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
            select * from Diseases";
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
        public JsonResult Post(Diseases die)
        {
            string query = @"INSERT INTO Diseases(Name,information,PhotoName) values ('" + die.Name + @"','" + die.information + @"','" + die.PhotoName + @"')";
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
        public JsonResult Put(Diseases die)
        {
            string query = @"
            update Diseases set 
            Name = '" + die.Name + @"'
            ,information = '" + die.information + @"'
            ,PhotoName='" + die.PhotoName + @"'
            where DiseasesID=" + die.DiseasesID + @" ";
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
            string query = @"DELETE FROM Diseases  where DiseasesID=" + id + @" ";

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
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/SliderPhotos/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {
                return new JsonResult("Hiv.jpg");
            }
        }
        [Route("GetPhoto/{name}")]
        [HttpGet]
        public IActionResult GetPhoto(string name)
        {
           
            string physicalPath = _env.ContentRootPath + "/SliderPhotos/" + name;
            Byte[] b = System.IO.File.ReadAllBytes(@"" + physicalPath);
            return File(b, "image/jpeg");
            
        }

    }

    

}
