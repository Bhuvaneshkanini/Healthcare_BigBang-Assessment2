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
    public class PatientController : ControllerBase
    {

        private readonly IPatientRepo _patientRepository;

        public PatientController(IPatientRepo patientRepository)
        {
            _patientRepository = patientRepository;
        }

        // GET: api/Patient
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Patient>>> GetPatients()
        {
            var patients = await _patientRepository.GetAllPatientsAsync();
            return patients;
        }

        // GET: api/Patient/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Patient>> GetPatient(int id)
        {
            var patient = await _patientRepository.GetPatientByIdAsync(id);
            if (patient == null)
                return NotFound();

            return patient;
        }

        // POST: api/Patient
        [HttpPost]
        public async Task<ActionResult<Patient>> CreatePatient(Patient patient)
        {
            var createdPatient = await _patientRepository.CreatePatientAsync(patient);
            return CreatedAtAction(nameof(GetPatient), new { id = createdPatient.PatientId }, createdPatient);
        }

        // PUT: api/Patient/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePatient(int id, Patient patient)
        {
            if (id != patient.PatientId)
                return BadRequest();

            var success = await _patientRepository.UpdatePatientAsync(patient);
            if (!success)
                return NotFound();

            return NoContent();
        }

        // DELETE: api/Patient/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePatient(int id)
        {
            var success = await _patientRepository.DeletePatientAsync(id);
            if (!success)
                return NotFound();

            return NoContent();
        }
    }
}
