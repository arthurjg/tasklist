package com.supero.tasklist.service.base;

import java.util.Date;
import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import com.supero.tasklist.model.Tarefa;
import com.supero.tasklist.repository.TarefaRepository;
import com.supero.tasklist.service.TarefaService;

public class TarefaServiceBase implements TarefaService {
	
	@Inject
	private TarefaRepository tarefaRepository;

	@Override
	@Transactional
	public void salvar(Tarefa tarefa) {
		tarefa.setDataCriacao(new Date());		
		tarefaRepository.salvar(tarefa);
	}

	@Override
	@Transactional
	public void atualizar(Tarefa tarefa) {
		tarefa.setDataEdicao(new Date());
		tarefaRepository.atualizar(tarefa);
	}

	@Override
	@Transactional
	public void remover(Tarefa tarefa) {
		tarefaRepository.remover(tarefa);
	}

	@Override
	@Transactional
	public List<Tarefa> listar() {		
		return tarefaRepository.listar();
	}

}
