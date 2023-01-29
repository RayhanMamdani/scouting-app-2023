<template>
    <main>
        
            <div class="column box">
                <RouterLink to="/">
                    <button class="column is-full button is-danger is-large is-responsive">Start</button>
                </RouterLink>
                <RouterLink to="/auto">
                    <button class="column is-full button is-warning is-large is-responsive">Auto</button>
                </RouterLink>
                <RouterLink to="/teleop">
                    <button class="column is-full button is-success is-large is-responsive">Teleop</button>
                </RouterLink>
                <RouterLink to="/endgame">
                    <button class="column is-full button is-light is-large is-responsive">Endgame</button>
                </RouterLink>
            </div>
            <div @click="this.$router.push('/auto')" class="card bg-dark text-light mx-auto" >
              <div class="card-body text-center">
                <h2 class="card-title">Grid</h2>
                <h5 class="card-text px-2 my-3">
                  The grid is a map of the playing field, where you can test, replay and analyze your strategies. 
                </h5>
              </div>
            </div>
        
    </main>
</template>