package com.supero.tasklist.repository;

import java.util.List;

import com.supero.tasklist.model.Tarefa;

public interface TarefaRepository {
	
	public void salvar(Tarefa clinica);
	public void atualizar(Tarefa clinica);
	public void remover(Tarefa clinica);	
	public List<Tarefa> listar();	

}
