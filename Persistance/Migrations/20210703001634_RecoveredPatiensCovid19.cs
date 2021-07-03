using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistance.Migrations
{
    public partial class RecoveredPatiensCovid19 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RecoveredPatiensCovid19",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    City = table.Column<string>(nullable: true),
                    Number = table.Column<int>(nullable: false),
                    Age = table.Column<int>(nullable: false),
                    Infected = table.Column<DateTime>(nullable: false),
                    Recovered = table.Column<DateTime>(nullable: false),
                    SickDays = table.Column<int>(nullable: false),
                    QuarantinedPlacee = table.Column<string>(nullable: true),
                    VaccienName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RecoveredPatiensCovid19", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RecoveredPatiensCovid19");
        }
    }
}
