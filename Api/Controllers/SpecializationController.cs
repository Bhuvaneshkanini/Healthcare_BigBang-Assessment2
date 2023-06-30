using BigBang_Assessment2_Healthcare_.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigBang_Assessment2_Healthcare_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpecializationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SpecializationController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Specialization
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Specialization>>> GetSpecializations()
        {
            return await _context.Specializations.ToListAsync();
        }

        // GET: api/Specialization/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Specialization>> GetSpecialization(int id)
        {
            var specialization = await _context.Specializations.FindAsync(id);

            if (specialization == null)
            {
                return NotFound();
            }

            return specialization;
        }

        // POST: api/Specialization
        [HttpPost]
        public async Task<ActionResult<Specialization>> CreateSpecialization(Specialization specialization)
        {
            _context.Specializations.Add(specialization);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetSpecialization), new { id = specialization.SpecializationId }, specialization);
        }

        // PUT: api/Specialization/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSpecialization(int id, Specialization specialization)
        {
            if (id != specialization.SpecializationId)
            {
                return BadRequest();
            }

            _context.Entry(specialization).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpecializationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Specialization/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpecialization(int id)
        {
            var specialization = await _context.Specializations.FindAsync(id);
            if (specialization == null)
            {
                return NotFound();
            }

            _context.Specializations.Remove(specialization);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SpecializationExists(int id)
        {
            return _context.Specializations.Any(s => s.SpecializationId == id);
        }
    }
}
