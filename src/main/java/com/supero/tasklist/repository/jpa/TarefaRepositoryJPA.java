package com.supero.tasklist.repository.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import com.supero.tasklist.repository.TarefaRepository;
import com.supero.tasklist.model.Tarefa;

public class TarefaRepositoryJPA implements TarefaRepository {

	@PersistenceContext
	private EntityManager manager;
	
	public TarefaRepositoryJPA(){
		
	}
	
	public TarefaRepositoryJPA(EntityManager manager){
		this.manager = manager;
	}	

	@Override
	public List<Tarefa> listar() {
		String hql = "select c from Tarefa c";
		Query consulta = manager.createQuery(hql);		
		return consulta.getResultList();
	}

	@Override
	public void salvar(Tarefa entidade) {
		manager.persist(entidade);		
	}

	@Override
	public void atualizar(Tarefa entidade) {
		Tarefa entidadePersistida = manager.find(Tarefa.class, entidade.getId());
		entidadePersistida.setDescricao(entidade.getDescricao());
		entidadePersistida.setTitulo(entidade.getTitulo());
		entidadePersistida.setDataEdicao(entidade.getDataEdicao());
		entidadePersistida.setStatus(entidade.getStatus());
		manager.merge(entidadePersistida);		
	}

	@Override
	public void remover(Tarefa entidade) {
		entidade = manager.find(Tarefa.class, entidade.getId());
		if(entidade != null){
			manager.remove(entidade);
		}		
	}	

}
