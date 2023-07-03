using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment2_Healthcare_.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }

        public int Age { get; set; }

        public string? Email { get; set; }

        public string? Phone { get; set; }

        public string? Address { get; set; }

        public ICollection<Doctor>? Doctors { get; set; }

    }
}
