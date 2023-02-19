<template>
    <div>

        <div class="field">
  <label class="label">Scout Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Name">
  </div>
</div>


<div class="field">
  <label class="label">Chargestation Endgame</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Docked</option>
        <option>Engaged</option>
        <option>Mobility</option>
        <option>None</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Cycling Over Chargestation?</label>
  <div class="control">
    <div class="select">
      <select>
        <option>No</option>
        <option>Yes</option>
        
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Defense</label>
  <div class="control">
    <div class="select">
      <select>
        <option>0 - No Defence</option>
        <option>1 - Rarely Defends</option>
        <option>2 - Some Defence</option>
        <option>3 - Frequent Defence</option>
        <option>4 - Only Plays Defence</option>
      </select>
    </div>
  </div>
</div>


<div class="field ">
    <label class="label"> Win </label>
    <div class="control">
        <label class="radio">
          <input type="radio" name="member">
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="member">
          No
        </label>

      </div>
</div>

<div class="field">
    <label class="label"> RP Gained</label>
    <input class="input" type="number" placeholder="RP">
</div>



<div class="field">
  <label class="label">Comments</label>
  <div class="control">
<textarea class="textarea" placeholder="Special comments on this robot"></textarea>
  </div>
</div>



<div class="field is-grouped">
  <div class="control">
    <button class="button is-primary">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
</div>
</template>