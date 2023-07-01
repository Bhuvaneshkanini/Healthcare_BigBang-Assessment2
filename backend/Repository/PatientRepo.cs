using BigBang_Assessment2_Healthcare_.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBang_Assessment2_Healthcare_.Repository
{
    public class PatientRepo:IPatientRepo
    {
        private readonly ApplicationDbContext _context;

        public PatientRepo(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<Patient>> GetAllPatientsAsync()
        {
            return await _context.Patients.ToListAsync();
        }

        public async Task<Patient> GetPatientByIdAsync(int id)
        {
            return await _context.Patients.FindAsync(id);
        }

        public async Task<Patient> CreatePatientAsync(Patient patient)
        {
            _context.Patients.Add(patient);
            await _context.SaveChangesAsync();
            return patient;
        }

        public async Task<bool> UpdatePatientAsync(Patient patient)
        {
            _context.Entry(patient).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> DeletePatientAsync(int id)
        {
            var patient = await _context.Patients.FindAsync(id);
            if (patient == null)
                return false;

            _context.Patients.Remove(patient);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
