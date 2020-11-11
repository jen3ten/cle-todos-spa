﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace todos.Migrations
{
    public partial class TodoModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Todos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Owner = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Todos", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Name", "Owner" },
                values: new object[,]
                {
                    { 1, "Remodel Bathroom", "Mr. Handyman" },
                    { 2, "Clean out bedroom", "Jen" },
                    { 3, "Text Mom", "Sarah" },
                    { 4, "Fix front doorstep", "Mark" },
                    { 5, "Listen to .NET Rocks! podcast", "Andy" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Todos");
        }
    }
}
