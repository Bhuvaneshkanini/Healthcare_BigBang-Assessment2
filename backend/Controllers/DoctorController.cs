using BigBang_Assessment2_Healthcare_.Models;

using BigBang_Assessment2_Healthcare_.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BigBang_Assessment2_Healthcare_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctorRepository _doctorRepository;

        public DoctorController(IDoctorRepository doctorRepository)
        {
            _doctorRepository = doctorRepository;
        }
       // GET: api/Doctor
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Doctor>>> GetDoctors()
        {
            var doctors = await _doctorRepository.GetAllDoctorsAsync();
            return doctors;
        }
        // GET: api/Doctor/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Doctor>> GetDoctorById(int id)
        {
            var doctor = await _doctorRepository.GetDoctorByIdAsync(id);

            if (doctor == null)
            {
                return NotFound();
            }

            return Ok(doctor);
        }

        // POST: api/Doctor
        [HttpPost]
        public async Task<ActionResult<Doctor>> CreateDoctor(Doctor doctor)
        {
            var createdDoctor = await _doctorRepository.CreateDoctorAsync(doctor);
            return CreatedAtAction(nameof(GetDoctorById), new { id = createdDoctor.DoctorId }, createdDoctor);
        }

        // PUT: api/Doctor/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDoctor(int id, Doctor doctor)
        {
            if (id != doctor.DoctorId)
            {
                return BadRequest();
            }

            var updated = await _doctorRepository.UpdateDoctorAsync(doctor);

            if (!updated)
            {
                return NotFound();
            }

            return NoContent();
        }

        // DELETE: api/Doctor/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDoctor(int id)
        {
            var deleted = await _doctorRepository.DeleteDoctorAsync(id);

            if (!deleted)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}

