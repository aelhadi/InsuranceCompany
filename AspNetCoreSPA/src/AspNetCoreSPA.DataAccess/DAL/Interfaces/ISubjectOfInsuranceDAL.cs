﻿using AspNetCoreSPA.Model.POCOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreSPA.DAL
{
    public interface ISubjectOfInsuranceDAL
    {
        DbSet<SubjectOfInsurance> GetAll();
    }
}
