﻿using System.Collections.Generic;
using AspNetCoreSPA.Model.POCOs;

namespace AspNetCoreSPA.BLL
{
    public interface IPolicyBLL
    {
        List<Policy> GetAll();
        int add(Policy polisa);
    }
}
