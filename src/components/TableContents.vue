<template>
    <main>
        <center>
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
        </center>
    </main>
</template>