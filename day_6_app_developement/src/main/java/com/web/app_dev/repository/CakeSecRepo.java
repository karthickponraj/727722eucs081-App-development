package com.web.app_dev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.web.app_dev.model.CakeSec;

@Repository
public interface CakeSecRepo extends JpaRepository<CakeSec,Integer>{

    
}
