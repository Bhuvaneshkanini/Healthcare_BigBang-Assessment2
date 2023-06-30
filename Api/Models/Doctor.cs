using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment2_Healthcare_.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }

        public string? FirstName { get; set; }

        public string? LasttName { get; set; }

        public int Age { get; set; }

        public int SpecializationID { get; set; }

        public Specialization ?Specializations { get; set; }

        public string? Email { get; set; }

        public string? Phone { get; set;}

        public string? Address { get; set; }

        public ICollection<Patient>? Patients { get; set; }


    }
}
