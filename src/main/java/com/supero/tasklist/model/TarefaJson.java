package com.supero.tasklist.model;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class TarefaJson {
	
	private String titulo;
	private String descricao;
	private String status;
	private String dataCriacao;	
	private String dataEdicao;	
	private String dataFinalizacao;	
	
	public TarefaJson(){	
		
	}
	
	public TarefaJson(Tarefa tarefa){	
		DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		this.titulo = tarefa.getTitulo();
		this.descricao = tarefa.getDescricao();
		this.status = tarefa.getStatus().equals("A") ? "Aberta" : "Encerrada";
		this.dataCriacao = formatter.format(tarefa.getDataCriacao());
		this.dataEdicao = tarefa.getDataEdicao() != null ? formatter.format(tarefa.getDataEdicao()) : "";
		this.dataFinalizacao = tarefa.getDataFinalizacao() != null ? formatter.format(tarefa.getDataFinalizacao()) : "";
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDataCriacao() {
		return dataCriacao;
	}

	public void setDataCriacao(String dataCriacao) {
		this.dataCriacao = dataCriacao;
	}

	public String getDataEdicao() {
		return dataEdicao;
	}

	public void setDataEdicao(String dataEdicao) {
		this.dataEdicao = dataEdicao;
	}

	public String getDataFinalizacao() {
		return dataFinalizacao;
	}

	public void setDataFinalizacao(String dataFinalizacao) {
		this.dataFinalizacao = dataFinalizacao;
	}
	
	

}
