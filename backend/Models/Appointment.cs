namespace BigBang_Assessment2_Healthcare_.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    namespace BigBang_Assessment2_Healthcare_.Models
    {
        public class Appointment
        {
            [Key]
            public int AppointmentId { get; set; }

            public int DoctorId { get; set; }

            public Doctor? Doctor { get; set; }

            public int PatientId { get; set; }

            public Patient? Patient { get; set; }

            public DateTime AppointmentDate { get; set; }

            public string? Description { get; set; }

            public string? Status { get; set; }
        }
    }

}
