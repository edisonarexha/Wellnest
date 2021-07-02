using System;

namespace Domain
{
    public class BookAppointment
    {
        public int Id{get;set;}
        public string FirstName{get;set;}
        public string SecondName{get;set;}
        public int Number{get;set;}
        public string Email {get;set;}

        public DateTime AppointmentDate{get;set;}
        public String Comment{get;set;}
    }
}