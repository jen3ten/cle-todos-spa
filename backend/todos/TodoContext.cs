using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using todos.Models;

namespace todos
{
    public class TodoContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=TodoApiFall2020Practice;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString);

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Todo>().HasData(
                new Todo
                {
                    Id = 1,
                    Name = "Remodel Bathroom",
                    Owner = "Mr. Handyman"
                },
                new Todo
                {
                    Id = 2,
                    Name = "Clean out bedroom",
                    Owner = "Jen"
                },
                new Todo
                {
                    Id = 3,
                    Name = "Text Mom",
                    Owner = "Sarah"
                },
                new Todo
                {
                    Id = 4,
                    Name = "Fix front doorstep",
                    Owner = "Mark"
                },
                new Todo
                {
                    Id = 5,
                    Name = "Listen to .NET Rocks! podcast",
                    Owner = "Andy"
                }
            );

        }
    }
}
