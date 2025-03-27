package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.services.dslService;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class restController {

    private final dslService DSLService;




    public restController(dslService DSLService) {
        this.DSLService = DSLService;
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/receive-dsl")
    public String receiveDSLText(@RequestBody String DSL)
    {
        DSLService.processDLS(DSL);
        return "Success";
    }

    @GetMapping("/get")
    public String testGET()
    {
        return "SERVER GIVES TEST TEXT";
    }

}
