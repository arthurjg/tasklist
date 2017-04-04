package com.supero.tasklist.ws.rest;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.supero.tasklist.model.Tarefa;
import com.supero.tasklist.model.TarefaJson;
import com.supero.tasklist.service.TarefaService;

@Path("/tarefas")
public class TarefaResource {
	
	@Inject
	private TarefaService tarefaService;
	
	@GET	
	@Produces(MediaType.APPLICATION_JSON)
	public Response listar(){
		
		try {
			List<TarefaJson> tarefas = new ArrayList<TarefaJson>();
			for(Tarefa tarefa : tarefaService.listar()){
				tarefas.add(new TarefaJson(tarefa));
			}
			return Response.status(200).entity(tarefas).build();
		} catch(Exception exception){	
			exception.printStackTrace();
			return Response.status(500).entity(exception.getMessage()).build();
		}
	}
	
	@POST	
    @Consumes(MediaType.APPLICATION_JSON)
	public Response salvar(Tarefa tarefa){
		
		try {
			tarefaService.salvar(tarefa);
			return Response.status(201).build();
		} catch(Exception exception){
			exception.printStackTrace();
			return Response.status(500).entity(exception.getMessage()).build();
		}
	}
	
	@PUT	
    @Consumes(MediaType.APPLICATION_JSON)
	public Response atualizar(Tarefa tarefa){
		
		try {
			tarefaService.atualizar(tarefa);
			return Response.status(200).build();
		} catch(Exception exception){
			exception.printStackTrace();
			return Response.status(500).entity(exception.getMessage()).build();
		}
	}

}
