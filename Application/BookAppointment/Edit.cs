using System;
using System.Threading.Tasks;
using MediatR;
using Persistance;

namespace Application.Appointemnt
{
    public class Edit
    {
        public class Command :IRequest
            { 
            public int Id{get;set;}
                public string FirstName{get;set;}
                public string SecondName{get;set;}
                public int? Number{get;set;}
                public string Email {get;set;}

                public DateTime? AppointmentDate{get;set;}
                public String Comment{get;set;}
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context=context;
            }
            public async Task<Unit> Handle(Command request, System.Threading.CancellationToken cancellationToken)
            {
                var appointment = await this.context.BookAppointment.FindAsync(request.Id);
                if(appointment==null)
                throw new Exception("Couldnt find any appointment");

                appointment.FirstName =request.FirstName ?? appointment.FirstName;
                appointment.SecondName =request.SecondName ?? appointment.SecondName;
                appointment.Number =request.Number ?? appointment.Number;
                appointment.Email=request.Email??appointment.Email;
                appointment.AppointmentDate=request.AppointmentDate??appointment.AppointmentDate;
              appointment.Comment=request.Comment??appointment.Comment;

                var success = await this.context.SaveChangesAsync()> 0;
                if(success ) return Unit.Value;
                throw new Exception("Problem Saving Changes");
            }
        }
    }
}