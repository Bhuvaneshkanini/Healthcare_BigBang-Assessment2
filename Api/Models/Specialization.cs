using System.ComponentModel.DataAnnotations;

namespace BigBang_Assessment2_Healthcare_.Models
{
    public class Specialization
    {
        [Key]
        public int SpecializationId { get; set; }

        public string? Name { get; set; }

        public string? Description { get; set; }

        public ICollection<Doctor>? Specializations { get; set; }
    }
}
