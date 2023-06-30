using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment2_Healthcare_.Models
{
    public class DoctorPatient
    {
        [Key]
        public int DoctorPatientId { get; set; }

        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }

        public int PatientId { get; set; }
        public Patient Patient { get; set; }
    }
}
