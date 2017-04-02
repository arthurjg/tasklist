package com.supero.tasklist.service;

import java.util.List;

import com.supero.tasklist.model.Tarefa;

public interface TarefaService {
	
	public void salvar(Tarefa tarefa);
	public void atualizar(Tarefa tarefa);
	public void remover(Tarefa tarefa);	
	public List<Tarefa> listar();	

}
