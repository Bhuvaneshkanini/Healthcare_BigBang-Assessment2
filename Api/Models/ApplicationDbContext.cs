using Microsoft.EntityFrameworkCore;

namespace BigBang_Assessment2_Healthcare_.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Patient> Patients { get; set; }
        public DbSet<Specialization> Specializations { get; set; }

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Doctor>()
                .HasMany(d => d.Patients)
                .WithMany(p => p.Doctors)
                .UsingEntity(j => j.ToTable("DoctorPatient"));

            base.OnModelCreating(modelBuilder);
        }

    }
}
