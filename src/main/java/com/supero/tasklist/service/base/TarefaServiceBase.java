package com.supero.tasklist.service.base;

import java.util.List;

import javax.inject.Inject;
import javax.transaction.Transactional;

import com.supero.tasklist.repository.TarefaRepository;
import com.supero.tasklist.service.TarefaService;
import com.supero.tasklist.model.Tarefa;

public class TarefaServiceBase implements TarefaService {
	
	@Inject
	private TarefaRepository clinicaRepository;

	@Override
	@Transactional
	public void salvar(Tarefa clinica) {
		clinicaRepository.salvar(clinica);
	}

	@Override
	@Transactional
	public void atualizar(Tarefa clinica) {
		clinicaRepository.atualizar(clinica);
	}

	@Override
	@Transactional
	public void remover(Tarefa clinica) {
		clinicaRepository.remover(clinica);
	}

	@Override
	@Transactional
	public List<Tarefa> listar() {		
		return clinicaRepository.listar();
	}

}
