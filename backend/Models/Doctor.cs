using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment2_Healthcare_.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public int Age { get; set; }

        public int SpecializationID { get; set; }

        public Specialization ?Specializations { get; set; }

        public string? Email { get; set; }

        public string? Phone { get; set;}

        public string? Education { get; set; }

        public int? Experience { get; set; }

        public string? Address { get; set; }

        public string? Description { get; set; }

        public string? status { get; set; }

        public int? UserId { get; set; }

        public User? Users { get; set; }


        public ICollection<Patient>? Patients { get; set; }


    }
}
