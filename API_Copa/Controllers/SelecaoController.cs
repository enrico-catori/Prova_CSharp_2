using System.Collections.Generic;
using System.Linq;
using api.Models;
using API_Copa.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_Copa.Controllers
{
    [ApiController]
    [Route("api/selecao")]
    public class SelecaoController : ControllerBase
    {
        private readonly Context _context;
        public SelecaoController(Context context) =>
            _context = context;

        private static List<Selecao> selecoes = new List<Selecao>();

        [HttpPost]
        [Route("cadastrar")]
        public IActionResult Cadastrar([FromBody] Selecao selecao)
        {
            _context.Selecoes.Add(selecao);
            _context.SaveChanges();
            return Created("", selecao);
        }

        [Route("listar")]
        [HttpGet]
        public IActionResult Listar() =>  
            Ok(_context.Selecoes.ToList());   
    }
}