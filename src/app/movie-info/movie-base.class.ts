import { inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MoviesService } from "../movies.service";

export abstract class MovieBase {
    protected route = inject(ActivatedRoute)
    protected moviesService = inject(MoviesService)
    protected router = inject(Router)

}