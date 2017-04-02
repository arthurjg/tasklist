package com.supero.tasklist.ws.rest;

import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.supero.tasklist.model.Tarefa;
import com.supero.tasklist.service.TarefaService;

@Path("/tarefas")
public class TarefaResource {
	
	@Inject
	private TarefaService tarefaService;
	
	@GET	
	@Produces(MediaType.APPLICATION_JSON)
	public Response listar(){
		
		try {
			List<Tarefa> tarefas = tarefaService.listar();
			return Response.status(200).entity(tarefas).build();
		} catch(Exception exception){
			return Response.status(500).entity(exception.getMessage()).build();
		}
	}

}
