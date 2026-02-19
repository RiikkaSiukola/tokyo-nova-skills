import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill';
import { signalUpdateFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  skillList: Skill[] = [
      {
        name: 'Skill 1', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat congue felis, quis condimentum lacus egestas at. Mauris efficitur tortor at elementum ornare. Maecenas nec dolor tincidunt, ultrices arcu ac, condimentum mi. Proin orci quam, suscipit non mauris nec, imperdiet luctus urna. Donec sodales risus at malesuada tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat congue felis, quis condimentum lacus egestas at. Mauris efficitur tortor at elementum ornare. Maecenas nec dolor tincidunt, ultrices arcu ac, condimentum mi. Proin orci quam, suscipit non mauris nec, imperdiet luctus urna. Donec sodales risus at malesuada tempus.', 
        tags: ['eka']
      },
      {
        name: 'Skill 2', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat congue felis, quis condimentum lacus egestas at. Mauris efficitur tortor at elementum ornare. Maecenas nec dolor tincidunt, ultrices arcu ac, condimentum mi. Proin orci quam, suscipit non mauris nec, imperdiet luctus urna. Donec sodales risus at malesuada tempus.', 
        tags: ['toka']
      },
      {
        name: 'Skill 3', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat congue felis, quis condimentum lacus egestas at. Mauris efficitur tortor at elementum ornare. Maecenas nec dolor tincidunt, ultrices arcu ac, condimentum mi. Proin orci quam, suscipit non mauris nec, imperdiet luctus urna. Donec sodales risus at malesuada tempus.', 
        tags: ['kolmas']
      },
      {
        name: 'Skill 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat congue felis, quis condimentum lacus egestas at. Mauris efficitur tortor at elementum ornare. Maecenas nec dolor tincidunt, ultrices arcu ac, condimentum mi. Proin orci quam, suscipit non mauris nec, imperdiet luctus urna. Donec sodales risus at malesuada tempus.', 
        tags: ['tämäOnTodellaPitkäTagi', 'TOINENPITKÄTAGI', 'vieläyksitagi']
      }
    ];
    tags: {tag: string, active: boolean}[] = [];

    ngOnInit(): void {
      const allTags = [... new Set(this.skillList.flatMap(skill => skill.tags))];
      this.tags = allTags.map(tag => { 
        return {tag, active: true}
      });
    }

    toggleTag(index: number) {
      this.tags[index].active = !this.tags[index].active;
    }

    toggleAll(active: boolean) {
      for (let tag of this.tags) {
        tag.active = active;
      }
    }

    shouldShowSkill(tags: string[]) {
      for (let skillTag of tags) {
        const foundTag = this.tags.find(tag => tag.tag === skillTag);
        if (foundTag?.active) return true;
      };
      return false;
    }
}
