package com.supero.tasklist.service;

import java.util.List;

import com.supero.tasklist.model.Tarefa;

public interface TarefaService {
	
	public void salvar(Tarefa clinica);
	public void atualizar(Tarefa clinica);
	public void remover(Tarefa clinica);	
	public List<Tarefa> listar();	

}
