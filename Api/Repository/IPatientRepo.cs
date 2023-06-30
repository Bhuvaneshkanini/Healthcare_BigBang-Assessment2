using BigBang_Assessment2_Healthcare_.Models;

namespace BigBang_Assessment2_Healthcare_.Repository
{
    public interface IPatientRepo
    {
        Task<List<Patient>> GetAllPatientsAsync();
        Task<Patient> GetPatientByIdAsync(int id);
        Task<Patient> CreatePatientAsync(Patient patient);
        Task<bool> UpdatePatientAsync(Patient patient);
        Task<bool> DeletePatientAsync(int id);
    }
}
