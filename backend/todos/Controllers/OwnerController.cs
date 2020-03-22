using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using todos.Models;
using todos.Repositories;

namespace todos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        private IRepository<Owner> ownerRepo;

        public OwnerController(IRepository<Owner> ownerRepo)
        {
            this.ownerRepo = ownerRepo;
        }
        
        // GET: api/Owner
        [HttpGet]
        public IEnumerable<Owner> Get()
        {
            return ownerRepo.GetAll();
        }

        // GET: api/Owner/5
        [HttpGet("{id}")]
        public Owner Get(int id)
        {
            return ownerRepo.GetById(id);
        }

        // POST: api/Owner
        [HttpPost]
        public IEnumerable<Owner> Post([FromBody] Owner owner)
        {
            ownerRepo.Create(owner);
            return ownerRepo.GetAll();
        }

        // PUT: api/Owner/5
        [HttpPut("{id}")]
        public IEnumerable<Owner> Put([FromBody] Owner owner)
        {
            ownerRepo.Update(owner);
            return ownerRepo.GetAll();
        }

        // DELETE: api/Owner/5
        [HttpDelete("{id}")]
        public IEnumerable<Owner> Delete(int id)
        {
            var owner = ownerRepo.GetById(id);
            ownerRepo.Delete(owner);
            return ownerRepo.GetAll();
        }
    }
}
