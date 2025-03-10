namespace MajorReact.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public required  Department Dept{ get;set; }

        public required string Designation { get; set; }


    }
}
