﻿using System.Collections.Generic;
using AspNetCoreSPA.Model.POCOs;

namespace AspNetCoreSPA.BLL
{
    public interface IRiskBLL
    {
        List<Risk> GetAll();
        int add(Risk r);
    }
}
