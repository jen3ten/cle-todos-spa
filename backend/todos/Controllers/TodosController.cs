﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace todos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        private static List<string> all = new List<string>()
        {
            "Remodel Bathroom",
            "Finish my laser app",
            "Do things with kids"
        };

        // GET: api/Todos
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return all;
        }

        // GET: api/Todos/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Todos
        [HttpPost]
        public ActionResult<IEnumerable<string>> Post([FromBody] string todo)
        {
            all.Add(todo);
            return all;
        }

        // PUT: api/Todos/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
