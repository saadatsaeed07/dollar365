function adjustWidth() {
    const element = document.querySelector('.w-responsive');
    const screenWidth = window.innerWidth;

    // Define the start and end widths
    const startWidth = 579;
    const endWidth = 858;
    const minScreenWidth = 1191;

    if (screenWidth >= minScreenWidth) {
      // Calculate the new width
      const extraWidth = screenWidth - minScreenWidth;
      const newWidth = Math.min(startWidth + extraWidth, endWidth);
      
      // Apply the calculated width
      element.style.width = `${newWidth}px`;
    } else {
      // Default width if below the minimum screen width
      element.style.width = `${endWidth}px`;
    }
  }

  // Initial adjustment
  adjustWidth();

  // Add event listener for window resizing
  window.addEventListener('resize', adjustWidth);

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    images = [
      'https://betever365.com/api/users/images/slider-default-2024324113733565.jpg',
      // Add more image URLs here
    ];
    currentIndex = 0;
  
    slickItemConfig = {
      class: 'slick-slide',
      tabindex: '0',
      role: 'tabpanel'
    };
  }