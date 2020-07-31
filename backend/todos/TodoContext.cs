﻿using Microsoft.EntityFrameworkCore;
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
        public DbSet<Owner> Owner { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=TodoApiSummer2020_practice;Trusted_Connection=True;";

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
                    OwnerId = 1
                },
                new Todo
                {
                    Id = 2,
                    Name = "Clean out bedroom",
                    OwnerId = 2
                },
                new Todo
                {
                    Id = 3,
                    Name = "Text Mom",
                    OwnerId = 3
                });

            modelBuilder.Entity<Owner>().HasData(
                new Owner
                {
                    Id = 1,
                    Name = "Mr. Handyman"
                },
                new Owner
                {
                    Id = 2,
                    Name = "Jen"
                },
                new Owner
                {
                    Id = 3,
                    Name = "Sarah"
                });
        }
    }
}
